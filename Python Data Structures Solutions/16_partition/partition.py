def partition(lst, fn):
    """Partition lst by predicate.

    """
    trues = []
    falses = []
    for element in lst:
        if fn(element):
            trues.append(element)
        else:
            falses.append(element)
    divided = []
    divided.append(trues)
    divided.append(falses)
    return divided
