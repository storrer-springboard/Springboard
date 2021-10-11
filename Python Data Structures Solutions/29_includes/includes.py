def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

    """
    # Check collection type

    if isinstance(collection, set):
        # if collection is a set return the result of this 'in' statement
        return sought in collection
  
    if isinstance(collection,dict):
        # look for sought in the _dict_values_ object from .values()
        return sought in collection.values()

    return sought in collection[start:]
    """    
    Long Version:
    if sought in collection[start:]:
        return True
    return False"""
