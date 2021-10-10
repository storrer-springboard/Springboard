def extract_full_names(people):
    """Return list of names, extracting from first+last keys in people dicts.

    - people: list of dictionaries, each with 'first' and 'last' keys for
              first and last names

    Returns list of space-separated first and last names.
    

    """ 
    space = " "
    full_names = [(person["first"] + space + person["last"]) for person in people]

    return full_names
