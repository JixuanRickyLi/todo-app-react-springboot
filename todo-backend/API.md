# API DESIGN OF THE TODO APP

## Retrieve all TODOs for a User
 * GET /users/{username}/todos
 
## Delete a TODO of a user
 * DELETE /users/{username}/todos/{todo_id}
 
## Edit a TODO 
 * PUT /users/{username}/todos/{todo_id}
 
## Create a new TODO
 * POST users/{username}/todos