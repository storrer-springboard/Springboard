def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.


    """
    # set of numbers previously used
    seen = set()

    for num2 in nums:
        # valid numbers add up goal
        match = goal - num2

        # if present valid match number in seen return the tuple 
        if match in seen:
            return (match, num2)
        # else add number to set of seen numbers
        seen.add(num2) 
    # if no pair sums to goal then return an empty tuple
    return ()
sum_pairs([5, 1, 4, 8, 3, 2], 7)
