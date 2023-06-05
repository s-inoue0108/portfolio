@extends('errors::minimal')

@section('title', __('FORBIDDEN'))
@section('code', '403')
@section('message', __($exception->getMessage() ?: 'FORBIDDEN'))
