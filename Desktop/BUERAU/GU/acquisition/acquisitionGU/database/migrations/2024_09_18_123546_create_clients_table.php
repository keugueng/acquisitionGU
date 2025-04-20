<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('email');
            $table->string('telephone');
            $table->string('adresse');
            $table->timestamp('date_naissance')->useCurrent();
            $table->string('profession');
            $table->string('employeur');
            $table->string('matricule');
            $table->string('ville_origine');
            $table->string('situation_familiale');
            $table->string('numero_carte_passport');
            $table->string('numero_compte');
            $table->string('banque');
            $table->boolean('solvable')->default(false);
            $table->string('nom_conjoint')->nullable();
            $table->string('prenom_conjoint')->nullable();
            $table->string('ville_origine_conjoint')->nullable();
            $table->timestamp('date_naissance_conjoint')->useCurrent()->nullable();
            $table->string('profession_conjoint')->nullable();
            $table->string('matricule_conjoint')->nullable();
            $table->string('employeur_conjoint')->nullable();
            $table->string('numero_carte__conjoint')->nullable();
            $table->string('numero_compte_conjoint')->nullable();
            $table->string('banque_conjoint')->nullable();
            $table->decimal('salaire', 18, 2)->nullable();
            $table->decimal('salaire_conjoint', 18, 2)->nullable();
            $table->decimal('autre_revenu', 18, 2)->nullable();
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
        Schema::dropIfExists('clients');
    }
}
