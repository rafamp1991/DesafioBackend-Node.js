const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'desafio',
  password: 'admin',
  port: 5432,
})

const getClientes = (request, response) => {
    pool.query('SELECT * FROM clientes ORDER BY id_cliente ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getClienteById = (request, response) => {
const id = parseInt(request.params.id)

    pool.query('SELECT * FROM clientes WHERE id_cliente = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getClienteByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM clientes WHERE nome = $1', [nome], (error, results) => {
            if (error) {
            throw error
            }
            response.status(200).json(results.rows)
        })
    }

const createCliente = (request, response) => {
    const { nome, sobrenome, sexo, datanascimento, idade, id_cidade } = request.body

    pool.query('INSERT INTO clientes (nome, sobrenome, sexo, datanascimento, idade, id_cidade) VALUES ($1, $2, $3, $4, $5, $6)', [nome, sobrenome, sexo, datanascimento, idade, id_cidade], (error, results) => {
      if (error) {
        throw error
      }
      
      response.status(201).send({ mensagem: 'Cliente cadastrado com sucesso.' });
    })
}

const updateCliente = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, sobrenome, sexo, datanascimento, idade, id_cidade } = request.body
  
    pool.query(
      'UPDATE clientes SET nome = $1, sobrenome = $2, sexo = $3, datanascimento = $4, idade = $5, id_cidade = $6 WHERE id_cliente = $7',
      [ nome, sobrenome, sexo, datanascimento, idade, id_cidade, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Cliente modificado com o ID: ${id}`)
      }
    )
}

const deleteCliente = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM clientes WHERE id_cliente = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Cliente deletado com ID: ${id}`)
    })
}

/*ESTADOS*/
const getEstados = (request, response) => {
    pool.query('SELECT * FROM estados ORDER BY id_estado ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEstadoById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM estados WHERE id_estado = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
    
const getEstadoByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM estados WHERE nome = $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEstadoByUf = (request, response) => {
    const uf = request.params.uf

    pool.query('SELECT * FROM estados WHERE uf = $1', [uf], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createEstado = (request, response) => {
    const { nome, uf } = request.body

    pool.query('INSERT INTO estados (nome, uf) VALUES ($1, $2)', [nome, uf], (error, results) => {
        if (error) {
        throw error
        }
        
        response.status(201).send({ mensagem: 'Estado cadastrado com sucesso.' });
    })
}
    
const updateEstado = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, uf } = request.body
    
    pool.query(
        'UPDATE estados SET nome = $1, uf = $2 WHERE id_estado = $3',
        [ nome, uf, id ],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Estado modificado com o ID: ${id}`)
        }
    )
}
    
const deleteEstado = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM estados WHERE id_estado = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Estado deletado com ID: ${id}`)
    })
}

/*CIDADES*/
const getCidades = (request, response) => {
    pool.query('SELECT * FROM cidades ORDER BY id_cidade ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM cidades WHERE id_cidade = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
    
const getCidadeByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM cidades WHERE nome = $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeByEstadoNome = (request, response) => {
    const nome = request.params.nome
    
    pool.query('SELECT cidades.id_cidade, cidades.nome, cidades.latitude, cidades.longitude, cidades.capital, estados.id_estado FROM cidades JOIN estados ON estados.id_estado = cidades.id_estado where estados.nome like $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeByEstadoUf = (request, response) => {
    const uf = request.params.uf
    
    pool.query('SELECT cidades.id_cidade, cidades.nome, cidades.latitude, cidades.longitude, cidades.capital, estados.id_estado FROM cidades JOIN estados ON estados.id_estado = cidades.id_estado where estados.uf like $1', [uf], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCidade = (request, response) => {
    const { nome, latitude, longitude, capital, id_estado } = request.body

    pool.query('INSERT INTO cidades (nome, latitude, longitude, capital, id_estado) VALUES ($1, $2, $3, $4, $5)', [nome, latitude, longitude, capital, id_estado], (error, results) => {
        if (error) {
        throw error
        }
        
        response.status(201).send({ mensagem: 'Cidade cadastrada com sucesso.' });
    })
}
    
const updateCidade = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, latitude, longitude, capital, id_estado } = request.body
    
    pool.query(
        'UPDATE cidades SET nome = $1, latitude = $2, longitude = $3, capital = $4, id_estado = $5 WHERE id_cidade = $6',
        [ nome, latitude, longitude, capital, id_estado, id ],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Cidade modificada com o ID: ${id}`)
        }
    )
}
    
const deleteCidade = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM cidades WHERE id_cidade = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Cidade deletada com ID: ${id}`)
    })
}

module.exports = {
    getClientes,
    getClienteById,
    getClienteByNome,
    createCliente,
    updateCliente,
    deleteCliente,

    getEstados,
    getEstadoById,
    getEstadoByNome,
    getEstadoByUf,
    createEstado,
    updateEstado,
    deleteEstado,

    getCidades,
    getCidadeById,
    getCidadeByNome,
    getCidadeByEstadoNome,
    getCidadeByEstadoUf,
    createCidade,
    updateCidade,
    deleteCidade,
  }