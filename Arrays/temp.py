#Arrays in python
def negativeTemp(temp):
    N = len(temp)
    days = 0
    for i in range(N):
        if(temp[i] < 0):
            days += 1       
    return days