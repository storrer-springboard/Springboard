def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    possible_factors = range(1, (num // 2) + 1)
    factors = [factor for factor in possible_factors if not num % factor]
    # lastly, add num to list
    factors.append(num)
    return factors
