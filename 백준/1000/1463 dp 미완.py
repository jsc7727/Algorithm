# 1463


c = int(input())
count = 0
while c > 1:
    print(c)
    count += 1
    if c % 3 == 0:
        temp = c//3
        if temp % 3 == 0 or temp % 2 == 0:
            c //= 3
            continue
    if c % 2 == 0:
        temp = c//2
        if temp % 3 == 0 or temp % 2 == 0:
            c //= 2
            continue
    if c % 3 == 0:
        c //= 3
        continue
    if c % 2 == 0:
        c //= 2
        continue
    c -= 1
print(count)
