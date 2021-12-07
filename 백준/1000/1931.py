#

# 11
# 1 4
# 3 5
# 0 6
# 5 7
# 3 8
# 5 9
# 6 10
# 8 11
# 8 12
# 2 13
# 12 14


# 착각해서 최대 회의실 개수를 구하는줄 알았네..

# 각색하고

# 정렬 조건을
# 1. 강의가 빨리 끝나는 순으로 정렬
# 2. 강의가 빨리 시작하는 순으로 정렬
# 정렬 1 조건 후 2 조건을 순서대로 만족해야함.

# check 값으로 배열의 첫번째 강의가 끝나는 시간을 넣는다.
# count 에 1을 넣는다.
# for 문을 arr[1:] 배열만큼 도는데
# 매 강의가 끝나는 시간을 넘어서는 순간 count+=1 과 check 값을 갱신한다.

c = int(input().strip())
arr = [list(map(int, input().strip().split())) for _ in range(c)]

arr.sort(key=lambda x: (x[1], x[0]))
count = 1
check = arr[0][1]
for x, y in arr[1:]:
    if x >= check:
        count += 1
        check = y
print(count)
