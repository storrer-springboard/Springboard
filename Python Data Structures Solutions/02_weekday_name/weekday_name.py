def weekday_name(day_of_week):
    """Return name of weekday.

    """
    days = [None, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if day_of_week > 7 or day_of_week < 1:
        return None
    else:
        return days[day_of_week]
