def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
 
    """
    lword = word.lower()
    count = lword.count(letter.lower())
    return count
