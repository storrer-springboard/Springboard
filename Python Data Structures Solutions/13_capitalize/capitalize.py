def compact(lst):
    """Return a copy of lst with non-true elements removed.

    """
    true_list = []
    for element in lst:
        if element:
            true_list.append(element)
    return true_list
