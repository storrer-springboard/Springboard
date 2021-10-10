def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.


    """
    the_mode = 0
    for number in nums:
        if nums.count(number) > the_mode:
            the_mode = number
    return the_mode
