import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CalendarCheck, Clock, MailWarning, Phone, RefreshCw, Trash2 } from 'lucide-react';
import api from '../api/axiosInstance';

const statusStyles = {
  new: 'bg-blue-50 text-blue-700 ring-blue-100',
  contacted: 'bg-amber-50 text-amber-700 ring-amber-100',
  completed: 'bg-emerald-50 text-emerald-700 ring-emerald-100'
};

const modeLabels = {
  online: 'Online Consultation',
  clinic: 'Clinic Visit'
};

const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

export default function Appointments() {
  const notificationContext = useOutletContext();
  const hasSharedConsultations = Boolean(notificationContext?.refreshConsultations);
  const [localConsultations, setLocalConsultations] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);
  const [localError, setLocalError] = useState('');
  const [updatingId, setUpdatingId] = useState('');
  const consultations = hasSharedConsultations ? notificationContext.consultations : localConsultations;
  const loading = hasSharedConsultations ? notificationContext.consultationsLoading : localLoading;
  const error = hasSharedConsultations ? notificationContext.consultationsError : localError;
  const setConsultations = hasSharedConsultations ? notificationContext.setConsultations : setLocalConsultations;

  const fetchConsultations = async () => {
    if (hasSharedConsultations) {
      await notificationContext.refreshConsultations();
      return;
    }

    try {
      setLocalLoading(true);
      setLocalError('');
      const { data } = await api.get('/consultations');

      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch consultation requests');
      }

      setLocalConsultations(data.data || []);
    } catch (err) {
      setLocalError(err.response?.data?.message || err.message || 'Failed to fetch consultation requests');
    } finally {
      setLocalLoading(false);
    }
  };

  useEffect(() => {
    if (!hasSharedConsultations) void fetchConsultations();
  }, [hasSharedConsultations]);

  const stats = useMemo(() => ({
    total: consultations.length,
    new: consultations.filter((item) => item.status === 'new').length,
    contacted: consultations.filter((item) => item.status === 'contacted').length,
    completed: consultations.filter((item) => item.status === 'completed').length
  }), [consultations]);

  const updateStatus = async (id, status) => {
    try {
      setUpdatingId(id);
      const { data } = await api.patch(`/consultations/${id}/status`, { status });

      if (!data.success) {
        throw new Error(data.message || 'Failed to update status');
      }

      setConsultations((current) => current.map((item) => item._id === id ? data.data : item));
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to update status');
    } finally {
      setUpdatingId('');
    }
  };

  const deleteConsultation = async (id) => {
    if (!window.confirm('Delete this consultation request?')) return;

    try {
      setUpdatingId(id);
      const { data } = await api.delete(`/consultations/${id}`);

      if (!data.success) {
        throw new Error(data.message || 'Failed to delete request');
      }

      setConsultations((current) => current.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to delete request');
    } finally {
      setUpdatingId('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Consultation Requests</h1>
          <p className="mt-1 text-sm text-slate-500">Bookings submitted from the website header form.</p>
        </div>
        <button
          type="button"
          onClick={fetchConsultations}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Requests</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
          <p className="text-sm font-medium text-blue-700">New</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">{stats.new}</p>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
          <p className="text-sm font-medium text-amber-700">Contacted</p>
          <p className="mt-2 text-3xl font-bold text-amber-900">{stats.contacted}</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
          <p className="text-sm font-medium text-emerald-700">Completed</p>
          <p className="mt-2 text-3xl font-bold text-emerald-900">{stats.completed}</p>
        </div>
      </div>

      {error ? (
        <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          <MailWarning className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Patient</th>
                <th className="px-5 py-4 font-semibold">Phone</th>
                <th className="px-5 py-4 font-semibold">Mode</th>
                <th className="px-5 py-4 font-semibold">Preferred Slot</th>
                <th className="px-5 py-4 font-semibold">Message</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-5 py-10 text-center text-slate-500">Loading consultation requests...</td>
                </tr>
              ) : consultations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-5 py-10 text-center text-slate-500">No consultation requests found.</td>
                </tr>
              ) : (
                consultations.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-50/70">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-400">Submitted {formatDate(item.createdAt)}</p>
                    </td>
                    <td className="px-5 py-4">
                      <a href={`tel:${item.phone}`} className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
                        <Phone className="h-4 w-4" />
                        {item.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4">{modeLabels[item.consultationMode] || item.consultationMode}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 font-medium text-slate-800">
                        <CalendarCheck className="h-4 w-4 text-slate-400" />
                        {formatDate(item.preferredDate)}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        {item.preferredTime}
                      </div>
                    </td>
                    <td className="max-w-xs px-5 py-4">
                      <p className="line-clamp-3 whitespace-pre-line text-slate-600">{item.message || 'N/A'}</p>
                    </td>
                    <td className="px-5 py-4">
                      <select
                        value={item.status}
                        disabled={updatingId === item._id}
                        onChange={(event) => updateStatus(item._id, event.target.value)}
                        className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ring-1 ${statusStyles[item.status] || statusStyles.new}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        disabled={updatingId === item._id}
                        onClick={() => deleteConsultation(item._id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        title="Delete request"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
