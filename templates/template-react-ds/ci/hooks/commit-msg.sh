commit_regex='(\#[0-9]+ \#[0-9]+|merge)'
error_msg="ERROR! Commit message should follow the pattern #123 #456, where 123 is the code of the story and 456 is the code of the sub-task."

if ! grep -iqE "$commit_regex" "$1"; then
    echo "$error_msg" >&2
    exit 1
fi

exit 0
