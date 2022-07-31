function parseUserNumber(s) {
  // Assuming s is a string. Add your own type handling here.
  
	const c = s.indexOf(',');
	const p = s.indexOf('.');
	if (c == -1) {
		// No comma at all, life is good.
		return parseFloat(s);
	}
	else if (p == -1) {
		// No period at all. Assume comma used as decimal sign, replace with period.
		return parseFloat(s.replace(',', '.'));
	}
	else if (c < p) {
		// Something resembling 1,234.5: Assume comma is thousands separator, just remove.
		return parseFloat(s.replaceAll(',', ''));
	}
	else {
		// Something resembling 1.234,5: Remove period, then replace comma with period.
		return parseFloat(s.replaceAll('.', '').replace(',', '.'));
	}
}
