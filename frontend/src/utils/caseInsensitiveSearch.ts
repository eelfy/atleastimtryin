function caseInsensitiveSearch(searchValue: string, valueToCheck: string): boolean {
  return valueToCheck.toLowerCase().includes(searchValue.toLowerCase());
}

export { caseInsensitiveSearch };
