import * as dotenv from 'dotenv';
dotenv.config();

export const values = {

        'Почта игрока': process.env.ROX_EMAIL,
        'Пароль игрока': process.env.ROX_PASS,

};