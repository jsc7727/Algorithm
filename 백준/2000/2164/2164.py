# 6
# 4

n = int(input())
arr = [i for i in range(1, n+1)]
while len(arr) > 1:
    if len(arr) % 2 == 0:
        arr = [arr[i] for i in range(len(arr)) if i % 2 == 1]
    else:
        arr = [arr[i] for i in range(len(arr)) if i % 2 == 1]
        arr = arr[1:]+[arr[0]]

print(arr[0])
