def repeat(phrase, num):
    """Return phrase, repeated num times.

    """
    # validate num value    
    if not isinstance(num, int):
        return None
    if num < 0:
        return None
    echo = phrase * num
    return echo
