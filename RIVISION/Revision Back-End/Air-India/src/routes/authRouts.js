const passport = require('passport');
const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();

router.post('/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res) => {
        res.status(200).send({
            success: true,
            message: "Signup successfully",
            data: {
                user: req.user
            }
        })
    })
router.post(
    '/login',
    async (req, res, next) => {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error("Someting went wrong")
                        return next(error)
                    }
                    req.login(
                        user,
                        { session: false },
                        async (err) => {
                            if (err) return next(err)
                            const body = { _id: user._id, emai: user.email };
                            const token = jwt.sign({ user: body }, 'Top_secret');
                            return res.status(200).send({
                                token,
                                success: true,
                                message: "signIn successfully"
                            });
                        }

                    )

                } catch (error) {
                    console.log(err)
                    return next(err)
                }
            }
        )(req,res,next);
    }
)


module.exports=router;