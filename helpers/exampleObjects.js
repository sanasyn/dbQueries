// age must be a string in order to compare what is in the database '55 Years'
let complete =
	{
		"age": "65",
		"sex": "female",
		"geneticTesting": "apoE4_1",
		"mri": "yes",
		"pet": "amyloidBeta_1",
		"spinalTap": "both",
		"memoryEval": {
			"taken": true,
			"mmse": 25,
			"moca": 25,
			"cdr": 1
		},
		"prescriptionDuration": 8,
		"medications": ["adricept", "exelon", "razadyneEr", "namenda"]
	}
let basic = 
	{
		"age": "70",
		"sex": "male",
		"geneticTesting": "no",
		"mri": "no",
		"pet": "no",
		"spinalTap": "no",
		"memoryEval": {
			"taken": false,
			"mmse": "no",
			"moca": "no",
			"cdr": "no"
		},
		"prescriptionDuration": 8,
		"medications": ["adricept", "exelon", "razadyneEr", "namenda"]
	}

module.exports = {
	complete: complete,
	basic: basic
}