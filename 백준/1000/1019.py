num = int(input())
temp = [0,0,0,0,0,0,0,0,0,0]
def adder1(num,count):
    for i in str(num):
        temp[int(i)] += count

def adder2(num,count):
    for i in range(10):
        temp[i] += (count*(num+1))

def adder3(num,count):
    for i in range(num + 1):
        temp[i] += count

count = 1
while(num > 9):
    right = (num % 10 )
    while (num % 10) != 9 :
        adder1(num,count)
        num-=1
    num //= 10
    adder2(num,count)
    temp[0] -= count
    count*=10
else:
    adder3(num,count)
    temp[0] -= count

print(*temp, sep=' ')