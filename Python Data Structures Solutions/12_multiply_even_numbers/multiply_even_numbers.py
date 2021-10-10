def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
      
    """
    # check for even number
    product = 1
    for number in nums:
        if number % 2: # if number is odd it will have 0/False remainder
            continue
        else:
            product *= number
    return product
