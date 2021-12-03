checkArr = [0]*42
for _ in range(10):
    c = int(input())
    checkArr[c % 42] += 1
result = 0
for i in checkArr:
    if i != 0:
        result += 1
print(result)
