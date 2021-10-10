def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

  
    """
    # validate input
    if (command != 'add') and (command != 'remove'):
        #print("invalid input")
        return None
    elif (location != "beginning") and (location != "end"):
        #print("invalid location")
        return None

    # figure out which command to do
    if command == "add":
        if location == "end":
            #print('adding to the end')
            lst.append(value)
            return lst
        elif location == "beginning":
            lst.insert(0,value)
            return lst
    if command == "remove":
        if location == "beginning":
            return lst.pop(0)
        elif location == "end":
            return lst.pop()
