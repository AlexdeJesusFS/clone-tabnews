function status(request, response) {
  response.status(200).json({ status: "Tudo funcionando!" });
}

export default status;
