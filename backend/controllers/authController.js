const mongoose = require('mongoose');
const jwtToken = require('jsonwebtoken');
const express = require('express');
const User = mongoose.model('User');