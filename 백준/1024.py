
# n, l = list(map(int, input().split()))
n, l = [18, 2]

result = [-1]
s = sum(range(5))
for i in range(l, 101):
    temp = n-s
    if temp < 0:
        break

    if temp % i == 0:
        result = [i, temp, n, s]
        break
    s += i

print(*result)
