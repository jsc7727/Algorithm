c = int(input())
for _ in range(c):
    x, y = map(int, input().split())
    arr = [input()[::-1] for i in range(x)]
    for i in arr:
        print(i)
