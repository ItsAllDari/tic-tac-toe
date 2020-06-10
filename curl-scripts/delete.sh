curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
