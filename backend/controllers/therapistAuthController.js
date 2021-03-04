const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const Therapist = require('../models/therapistModel');