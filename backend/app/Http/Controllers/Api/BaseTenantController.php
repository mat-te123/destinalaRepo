<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseTenantController extends Controller {
    protected $model;

    public function index() {
        return response()->json($this->model::all());
    }

    public function store(Request $request) {
        $data = $this->model::create($request->all());
        return response()->json(['message' => 'Data Berhasil Dibuat', 'data' => $data], 201);
    }

    public function show($id) {
        return response()->json($this->model::findOrFail($id));
    }

    public function update(Request $request, $id) {
        $item = $this->model::findOrFail($id);
        $item->update($request->all());
        return response()->json(['message' => 'Data Berhasil Diperbarui']);
    }

    public function destroy($id) {
        $this->model::findOrFail($id)->delete();
        return response()->json(['message' => 'Data Berhasil Dihapus']);
    }
}