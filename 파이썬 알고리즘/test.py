from collections import deque, defaultdict,Counter
import re
from typing import List


def isPalindrome(s: str) -> bool:
    # strs = []
    strs: deque = deque()
    for char in s:
        print(char)
        if char.isalnum():
            strs.append(char.lower())

    # 팰린드롬 여부 판별
    while len(strs) > 1:
        if strs.popleft() != strs.pop():
            return False
    return True

def isPalindrome2(s: str) -> bool:
    s = s.lower()
    # 정규식으로 불필요한 문자 필터링
    print(s)
    s = re.sub('[^a-z0-9]', '', s)
    print(s[::-1])
    return s == s[::-1] # 슬라이싱


s = "asdfqwer sadfdsfads "

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
# print(re.sub(r'[^\w]',' ',paragraph))
words = [i for i in re.sub(r'[^\w]',' ',paragraph).lower().split() if i not in banned]
# print(words)


counts = defaultdict(int)
for word in words:
    counts[word] += 1

# print(counts)
# print(max(counts, key=counts.get))
# print(counts[max(counts, key=counts.get)])

# counts = Counter(words)
# print(counts.most_common())
    

def twoSum( nums: List[int], target: int) -> List[int]:
    for i, n in enumerate(nums):
        print(i,n)
        complement = target - n
    if complement in nums[i + 1:]:
        return [nums.index(n), nums[i + 1:].index(complement) + (i + 1)]


def twoSum2( nums: List[int], target: int) -> List[int]:
    nums_map = {}
    # 키와 값을 바꿔서 딕셔너리로 저장
    for i, num in enumerate(nums):
        nums_map[num] = i
    # 타겟에서 첫 번째 수를 뺀 결과를 키로 조회
    for i, num in enumerate(nums):
        if target - num in nums_map and i != nums_map[target - num]:
            return [i, nums_map[target - num]]

# print(twoSum([2,7,11,15],9))
# print(twoSum2([2,7,11,15],9))


def trap(height: List[int]) -> int:
    if not height:
        return 0
    volume = 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    while left < right:
        left_max, right_max = max(height[left], left_max), max(height[right], right_max)
        # 더 높은 쪽을 향해 투 포인터 이동
        if left_max <= right_max:
            volume += left_max - height[left]
            left += 1
        else:
            volume += right_max - height[right]
            right -= 1
    return volume

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

