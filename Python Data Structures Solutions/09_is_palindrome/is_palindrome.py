def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

      
    """
    reverse = phrase[::-1].replace(" ","")
    no_spaces = phrase.replace(" ","")
    if reverse.lower() == no_spaces.lower():
        return True
    else:
        return False
