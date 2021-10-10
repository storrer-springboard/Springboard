def triple_and_filter(nums):
    """Return new list of tripled nums for those nums divisible by 4.

    Return every number in list that is divisible by 4 in a new list,
    except multipled by 3.
    
  
    """
    tripled = [num *3 for num in nums if num % 4 == 0]
    return tripled
