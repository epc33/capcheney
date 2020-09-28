const mongoose = require('mongoose')

const ediSchema = new mongoose.Schema([
	transactionHeader: {
		ST01: Number,
		ST02: Number
	},
	beginingSegment: {
		BEG01: Number,
		BEG02: String,
		BEG03: String,
		BEG04: Date
	},
	referenceIdentification: {
		REF01: String,
		REF02: Number
	},
	dateTimeQualifier: {
		DTM01: Number,
		DTM02: Date
	},
	vendorInformation: {
		N101: String,
		N102: String,
		N103: Number,
		N104: Number
	},
	addressInformation: {
		N301: String,
		N401: String
		N402: String,
		N403: Number
	},
	lineItems [
	{
		PO101: Number,
		PO102: Number,
		PO103: String,
		PO104: Number,
		PO105: String,
		PO106: Number,
		PO107: String,
		PO108: Number,
		PO109: String,
		PO10: Number,
		PID01: String,
		PID02: String
	}
],
	transactionalTotals: {
		CTT01: Number,
		CTT02: Number
	},
	transactionalTrailer: {
		SE01: Number,
		SE02: Number
	}
	})
	
	const EDI = mongoose.model('EDI',ediSchema);
	
	module.exports = EDI;
	