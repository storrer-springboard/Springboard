def intersection(l1, l2):
    """Return intersection of two lists as a new list::

    """
    one = set(l1)
    two = set(l2)
    intersect = one & two
    return list(intersect)
