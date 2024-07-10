const Customer = require('./models/customer');

exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    const updatedCustomer = await Customer.findByPk(req.params.id);
    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const deleted = await Customer.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
