### Running the application

1. Clone the repository.
2. In the terminal, run `npm install`.
3. In the terminal, run `npm start`.
4. Open the browser at [https://localhost:4200]()

### What's implemented

- List of employees with the basic information
  - Since we don't use the external API, there's no need to provide pagination, but `mat-paginator` should provide the basic functionality if needed
  - Filtering is pretty basic since the core `mat-table` API doesn't allow more sophisticated search
- User Details
- User Editing
  - I decided to allow only the `name`, `email`, and `role` fields to be edited since the `id` must not be changed, and it's not logical to edit the user's status and joining date. In the real world it would depend on the exact requirements.
- State Mangement with NgRx
- Reactive Programming with RxJS
- Unit Testing
  - I created several unit tests for each type of the tested entity, since the approach would be the same for the rest. Test coverage is up to 60%, but my usual "good enough" criteria is 80% and up.
- Styling

### What's not implemented

- Optional features
  - I would use a third-party library like `ngrx-store-localstorage` or, if it's not desired to use a third-party solution, I would try to implement a meta reducer for the store to handle the save/load state functionality.
