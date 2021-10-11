def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.
    """

    lphrase = phrase.lower()
    vowels = "aeiou"
    count = {}
    # returns a dict with vowels in order of occurrence
    for letter in lphrase:
        if letter in vowels:
            count[letter] = lphrase.count(letter)
            vowels.replace(letter,"")
    return count
    """
    This version does not pass the stupid tests because
    the tests order the counted vowels in the dictionary
    by occurrence.

    Version 1
    for vowel in vowels:
        if vowel in lphrase:
            count[vowel] = lphrase.count(vowel)
    """
