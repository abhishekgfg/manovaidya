import Consultation from '../models/Consultation.js';

export const createConsultation = async (req, res) => {
  try {
    const { name, phone, consultationMode, preferredDate, preferredTime, message } = req.body;

    if (!name || !phone || !consultationMode || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone, mode, date, and time are required'
      });
    }

    const consultation = await Consultation.create({
      name,
      phone,
      consultationMode,
      preferredDate,
      preferredTime,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: consultation
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request',
      error: error.message
    });
  }
};

export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: consultations
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    });
  }
};

export const updateConsultationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Consultation status updated successfully',
      data: consultation
    });
  } catch (error) {
    console.error('Error updating consultation status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update consultation status',
      error: error.message
    });
  }
};

export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const consultation = await Consultation.findByIdAndDelete(id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Consultation request deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete consultation request',
      error: error.message
    });
  }
};
