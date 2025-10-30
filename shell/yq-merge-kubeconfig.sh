#/bin/bash

# https://mikefarah.gitbook.io/yq/operators/multiply-merge#merge-arrays-of-objects-together-matching-on-a-key
merge_yaml() { # file1, file2, idPath, originalPath
  local file1=$1
  local file2=$2
  local idPath=".name"
  local originalPath=$3
  local otherPath=$3
  yq eval-all '
  (
    (( (eval(strenv(originalPath)) + eval(strenv(otherPath)))  | .[] | {(eval(strenv(idPath))):  .}) as $item ireduce ({}; . * $item )) as $uniqueMap
    | ( $uniqueMap  | to_entries | .[]) as $item ireduce([]; . + $item.value)
  ) as $mergedArray
  | select(fi == 0) | (eval(strenv(originalPath))) = $mergedArray
  ' $file1 $file2
}

export OUT1=$(merge_yaml ~/.kube/config ~/.kube/dev-rancher.yaml .users)
export OUT1=$(merge_yaml <(echo "$OUT1") ~/.kube/dev-rancher.yaml .clusters)
export OUT1=$(merge_yaml <(echo "$OUT1") ~/.kube/dev-rancher.yaml .contexts)
echo "$OUT1"