<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActeVentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actes_vente', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contrat_reservation_id')->constrained('contrats_reservation')->onDelete('cascade');
            $table->foreignId('logement_id')->constrained('logements')->onDelete('cascade');
            $table->timestamp('date_acte')->useCurrent();
            $table->string('notaire');
            $table->string('type_acte'); // (Vente, Donation)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acte_ventes');
    }
}
