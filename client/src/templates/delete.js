function validateData() {
	var errors = false;
	setFocus = null;
	if ((document.getElementsByName("pledgeTitleId")[0] == null || document.getElementsByName("pledgeTitleId")[0].value == -1 ||
			document.getElementsByName("pledgeTitleId")[0].value == 0) && (document.getElementsByName("titleFreeText")[0].value == null)) {
		highligthObject(document.getElementById("pledgeTitleDropDown"), true);
		errors = true;
	} else {
		if (document.getElementById("pledgeTitleDropDown")) {
			highligthObject(document.getElementById("pledgeTitleDropDown"), false);
		} else {
			highligthObject(document.getElementById("titleFreeText"), false);
		}
	}

	if (document.getElementById("org_grp_dropdown_id") == null || document.getElementById("org_grp_dropdown_id").value == -1) {
		highligthObject(document.getElementById("org_grp_dropdown_id"), true);
		errors = true;
	} else {
		highligthObject(document.getElementById("org_grp_dropdown_id"), false);
	}

	var i = 0;
	var j = 0;
	var percent = 100;
	while (document.getElementsByName("pledgeSectors[" + i + "].sectorPercentage")[0] != null) {
		var temp = 0;
		temp = temp + document.getElementsByName("pledgeSectors[" + i + "].sectorPercentage")[0].value;
		if (document.getElementsByName("pledgeSectors[" + i + "].sectorPercentage")[0].value.length == 0 || temp == 0) {
			highligthObject(document.getElementsByName("pledgeSectors[" + i + "].sectorPercentage")[0], true);
			errors = true;
		} else {
			highligthObject(document.getElementsByName("pledgeSectors[" + i + "].sectorPercentage")[0], false);
		}
		i++;
		percent = percent - temp;
	}
	if (percent != 0 && percent != 100) {
		while (document.getElementsByName("pledgeSectors[" + j + "].sectorPercentage")[0] != null) {
			highligthObject(document.getElementsByName("pledgeSectors[" + j + "].sectorPercentage")[0], true);
			errors = true;
			j++;
		}
	}

	i = 0;
	percent = 100;
	while (document.getElementsByName("selectedLocs[" + i + "].locationpercentage")[0] != null) {
		var temp = 0;
		temp = temp + document.getElementsByName("selectedLocs[" + i + "].locationpercentage")[0].value;
		if (document.getElementsByName("selectedLocs[" + i + "].locationpercentage")[0].value.length == 0 || temp == 0) {
			highligthObject(document.getElementsByName("selectedLocs[" + i + "].locationpercentage")[0], true);
			errors = true;
		} else {
			highligthObject(document.getElementsByName("selectedLocs[" + i + "].locationpercentage")[0], false);
		}
		i++;
		percent = percent - temp;
	}
	if (percent != 0 && percent != 100) {
		j = 0;
		while (document.getElementsByName("selectedLocs[" + j + "].locationpercentage")[0] != null) {
			highligthObject(document.getElementsByName("selectedLocs[" + j + "].locationpercentage")[0], true);
			errors = true;
			j++;
		}
	}

	i = 0;
	percent = 100;
	while (document.getElementsByName("selectedProgs[" + i + "].programpercentage")[0] != null) {
		var temp = 0;
		temp = temp + document.getElementsByName("selectedProgs[" + i + "].programpercentage")[0].value;
		if (document.getElementsByName("selectedProgs[" + i + "].programpercentage")[0].value.length == 0 || temp == 0) {
			highligthObject(document.getElementsByName("selectedProgs[" + i + "].programpercentage")[0], true);
			errors = true;
		} else {
			highligthObject(document.getElementsByName("selectedProgs[" + i + "].programpercentage")[0], false);
		}
		i++;
		percent = percent - temp;
	}
	if (percent != 0 && percent != 100) {
		j = 0;
		while (document.getElementsByName("selectedProgs[" + j + "].programpercentage")[0] != null) {
			highligthObject(document.getElementsByName("selectedProgs[" + j + "].programpercentage")[0], true);
			errors = true;
			j++;
		}
	}

	i = 0;
	while (i <= numFund) {
		if (document.getElementsByName("fund_" + i + "_4")[0] != null) {
			var temp = 0;
			temp = temp + document.getElementsByName("fund_" + i + "_4")[0].value;
			if (document.getElementsByName("fund_" + i + "_4")[0].value.length == 0 || temp == 0) {
				highligthObject(document.getElementsByName("fund_" + i + "_4")[0], true);
				errors = true;
			} else {
				var tmp = replaceAll(document.getElementsByName("fund_" + i + "_4")[0].value, " ", "");
				if (isNaN(tmp)) {
					highligthObject(document.getElementsByName("fund_" + i + "_4")[0], true);
					errors = true;
				} else {
					highligthObject(document.getElementsByName("fund_" + i + "_4")[0], false);
				}
			}
		}
		i++;
	}

	i = 0;
	while (i <= numFund) {
		if (document.getElementsByName("fund_" + i + "_5")[0] != null) {
			var temp = 0;
			temp = document.getElementsByName("fund_" + i + "_5")[0].value;
			if (temp == -1) {
				highligthObject(document.getElementsByName("fund_" + i + "_5")[0], true);
				errors = true;
			} else {
				highligthObject(document.getElementsByName("fund_" + i + "_5")[0], false);
			}
		}
		i++;
	}

	if (document.getElementsByName("contact1Email")[0] != null && document.getElementsByName("contact1Email")[0].value.length > 0 && !verifyEmail(document.getElementsByName("contact1Email")[0].value)) {
		highligthObject(document.getElementsByName("contact1Email")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact1Email")[0], false);
	}

	if (document.getElementsByName("contactAlternate1Email")[0] != null && document.getElementsByName("contactAlternate1Email")[0].value.length > 0 && !verifyEmail(document.getElementsByName("contactAlternate1Email")[0].value)) {
		highligthObject(document.getElementsByName("contactAlternate1Email")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contactAlternate1Email")[0], false);
	}

	if (document.getElementsByName("contact2Email")[0] != null && document.getElementsByName("contact2Email")[0].value.length > 0 && !verifyEmail(document.getElementsByName("contact2Email")[0].value)) {
		highligthObject(document.getElementsByName("contact2Email")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact2Email")[0], false);
	}

	if (document.getElementsByName("contactAlternate2Email")[0] != null && document.getElementsByName("contactAlternate2Email")[0].value.length > 0 && !verifyEmail(document.getElementsByName("contactAlternate2Email")[0].value)) {
		highligthObject(document.getElementsByName("contactAlternate2Email")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contactAlternate2Email")[0], false);
	}

	var tmp = replaceAll(replaceAll(document.getElementsByName("contact1Telephone")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contact1Telephone")[0] != null && document.getElementsByName("contact1Telephone")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contact1Telephone")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact1Telephone")[0], false);
	}

	tmp = replaceAll(replaceAll(document.getElementsByName("contact1Fax")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contact1Fax")[0] != null && document.getElementsByName("contact1Fax")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contact1Fax")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact1Fax")[0], false);
	}

	tmp = replaceAll(replaceAll(document.getElementsByName("contactAlternate1Telephone")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contactAlternate1Telephone")[0] != null && document.getElementsByName("contactAlternate1Telephone")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contactAlternate1Telephone")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contactAlternate1Telephone")[0], false);
	}

	tmp = replaceAll(replaceAll(document.getElementsByName("contact2Telephone")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contact2Telephone")[0] != null && document.getElementsByName("contact2Telephone")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contact2Telephone")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact2Telephone")[0], false);
	}

	tmp = replaceAll(replaceAll(document.getElementsByName("contact2Fax")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contact2Fax")[0] != null && document.getElementsByName("contact2Fax")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contact2Fax")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contact2Fax")[0], false);
	}

	tmp = replaceAll(replaceAll(document.getElementsByName("contactAlternate2Telephone")[0].value, "-", ""), " ", "");
	if (document.getElementsByName("contactAlternate2Telephone")[0] != null && document.getElementsByName("contactAlternate2Telephone")[0].value.length > 0 && isNaN(tmp)) {
		highligthObject(document.getElementsByName("contactAlternate2Telephone")[0], true);
		errors = true;
	} else {
		highligthObject(document.getElementsByName("contactAlternate2Telephone")[0], false);
	}
