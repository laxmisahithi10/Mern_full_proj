import {reports} from '../models/report.model.js';

export const submitReport = async (req, res) => {
    try {
        const report = await reports.create(req.body);
        res.status(201).json(report);
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};