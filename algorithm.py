def cpp(frequency, time):
    per_week = frequency * 4
    time_in_week = time * 52
    load = per_week * time_in_week
    load_in_gallons = ((load/1000)/3.78)
    profit =  load_in_gallons * 190000
    return int(profit)

    