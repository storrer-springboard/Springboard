def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.
    """
    # make a set of each unique letter in phrase
    #  phrase.count(letter) for each unique letter in phrase
    #       store the result in dict
    unique_letters = set(phrase)
    letter_count = dict()
    for letter in unique_letters:
        letter_count[letter] = phrase.count(letter)
    return letter_count
print(multiple_letter_count("Yay"))
