def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

      

    """
    lswap = to_swap.lower()
    swapped = ""
    for letter in phrase:
        if (letter.lower() == lswap):
            swapped += letter.swapcase()
        else:
            swapped += letter
    return swapped
