import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-52-72-56-59.compute-1.amazonaws.com',
    user:'evohhumvsrrctw',
    password: '5b7999c39c231101a6b7cd60d4b6a1d7e6e8447a09bd17da922cbfce05c7da9c',
    database: 'dav08r6eao8ag4',
    port: 5432,
    ssl:{ rejectUnauthorized:false}
});