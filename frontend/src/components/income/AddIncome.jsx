function AddIncome({ onClose, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const amount = Number(formData.get("amount"));
    const date = formData.get("date");

    if (amount <= 0) {
      alert("Amount must be greater than 0.");
      return;
    }

    if (!date) {
      alert("Please select a date.");
      return;
    }

    const newIncome = {
      title: formData.get("title").trim(),
      amount: amount.toFixed(2),
      category: formData.get("category"),
      date: date,
    };

    onAdd(newIncome);
  };

  return (
    <div className="modal-backdrop-custom">
      <div className="add-income-modal">

        <div className="modal-header-custom">
          <div>
            <h4>Add Income</h4>
            <p>Add a new income source</p>
          </div>

          <button
            type="button"
            className="close-modal"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Income Source */}
          <div className="mb-3">
            <label className="form-label">
              Income Source
            </label>

            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="e.g. Salary"
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-3">
            <label className="form-label">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder="0.00"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">
              Category
            </label>

            <select
              name="category"
              className="form-select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select category
              </option>

              <option value="Primary">
                Primary
              </option>

              <option value="Side Hustle">
                Side Hustle
              </option>

              <option value="Investment">
                Investment
              </option>

              <option value="Gift">
                Gift
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="form-label">
              Date
            </label>

            <input
              type="date"
              name="date"
              className="form-control"
              required
            />
          </div>

          {/* Buttons */}
          <div className="modal-actions">

            <button
              type="button"
              className="btn btn-light"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Income
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default AddIncome;